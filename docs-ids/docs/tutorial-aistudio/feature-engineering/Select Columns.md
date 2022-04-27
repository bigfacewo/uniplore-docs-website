### 组件介绍
**“属性选择”（Select Columns）**控件用于用户手动选择要保留的属性以及修改属性类型。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“属性选择”（Select Columns）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/select-columns/param.png) ](/img/aistudio/feature-engineering/select-columns/param.png)

点击**“详细配置”**按钮，进行详细配置：
[ ![](/img/aistudio/feature-engineering/select-columns/interaction.png) ](/img/aistudio/feature-engineering/select-columns/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>可选属性</td> 
      <td>
      数据集中忽略显示的属性，可以通过搜索框进行模糊或精确搜索。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>特征属性</td> 
      <td>
      用于分类，其中的字段即被认为纳入模型特征。可以将其设置为其他三类属性。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>目标属性</td> 
      <td>
      被预测的字段。可以设置为其他三类属性。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>描述属性</td> 
      <td>
      不参与模型构建，可以设置为可选属性。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“属性选择”（Select Columns）**控件修改数据集的属性设置，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/select-columns/workflow.png) ](/img/aistudio/feature-engineering/select-columns/workflow.png)

案例中加载 iris 数据集，设置忽略属性【sepal width】和属性【petal length】。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/select-columns/workflow-result.png) ](/img/aistudio/feature-engineering/select-columns/workflow-result.png)