### 组件介绍
**“特征构建”（Feature Constructor）**控件可计算分类或回归数据集中特征属性的排名信息。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“特征构建”（Feature Constructor）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/feature-constructor/param.png) ](/img/aistudio/feature-engineering/feature-constructor/param.png)

#### 参数选项

**连续特征参数选项**
对于连续型特征而言，只能通过构造一个Python表达式来计算特征值。  
[ ![](/img/aistudio/feature-engineering/feature-constructor/numeric.png) ](/img/aistudio/feature-engineering/feature-constructor/numeric.png)

<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>新建属性</td> 
      <td>
      新建一个连续型、离散型、字符串型的特征，也可以复制一个已创建的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>属性名</td> 
      <td>
      新建属性的名称
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>表达式</td> 
      <td>
      Python表达式，支持数学四则运算（+，-，*，/，\//）、取余运算（%）、指数运算以及值的比较（&lt;, &gt;, &lt;=, &gt;=, ==, !=）<br/>
      例如： value1 if 条件1 else value2 if 条件2 else value3
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>表达式选项</td> 
      <td>
      选择可以操作的属性以及可以使用的函数来构建表达式<br/>
      选择函数后，下方将显示函数用法，函数说明以及函数示例
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>表达式列表</td> 
      <td>
      已经构建的表达式，可以选择查看，也可点击右侧的“删除”按钮删除该属性及相应的表达式
      </td> 
      <td></td>
  </tr>
</table>

**离散特征参数选项**
对于离散型特征而言，还需对更多参数进行配置。点击“新建属性”按钮，并选择创建离散型特征，出现如下图所示的交互页面。用户除了需要对上图中显示的参数进行设置之外，还需列出离散特征的所有取值。  
[ ![](/img/aistudio/feature-engineering/feature-constructor/category.png) ](/img/aistudio/feature-engineering/feature-constructor/category.png)

<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>离散值</td> 
      <td>
      离散特征的取值列表，使用逗号分隔各个取值，取值个数需与Python表达式的逻辑条件分支数保持一致以便在不同情形下将不同取值分配给该离散特征。 
      </td> 
      <td></td>
  </tr>
</table>

:::caution
对于离散型，Python表达式中的value值对应取值列表中的序号(0，1)，而非取值(A, B)。
:::


:::tip
[Python数学函数库表](https://www.tutorialspoint.com/python/python_basic_operators.htm)
:::

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“特征构建”（Feature Constructor）**控件构造新的属性，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/feature-constructor/workflow.png) ](/img/aistudio/feature-engineering/feature-constructor/workflow.png)

案例中采用 iris 数据集，构造了一个连续型特征【sepal_length_flag】和一个离散型特征【ceil_sepal_length】。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/feature-constructor/workflow-result.png) ](/img/aistudio/feature-engineering/feature-constructor/workflow-result.png)