### 组件介绍
**“自动特征选择”（Select Best N Attributes）**控件能够根据数据自动分析出与【target】属性相关联的一般属性，根据关联程度筛选出指定个数的属性用于分析。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“自动特征选择”（Select Best N Attributes）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/feature-engineering/select-best-n-attributes/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>特征数</td> 
      <td>
      需要保留的属性个数
      </td> 
      <td>3</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“自动特征选择”（Select Best N Attributes）**控件自动选择属性，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
![workflow](/img/aistudio/feature-engineering/select-best-n-attributes/workflow.png)

案例中加载 iris 数据集，其余控件使用默认参数，案例中控件的配置以及执行结果如下图所示。    
![workflow-result](/img/aistudio/feature-engineering/select-best-n-attributes/workflow-result.png)