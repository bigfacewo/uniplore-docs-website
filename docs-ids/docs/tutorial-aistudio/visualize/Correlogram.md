### 组件介绍
**“相关图（Correlogram）”**控件用于绘制数据子集的维恩图。
<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“相关图（Correlogram）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/visualize/correlogram/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization](/img/aistudio/visualize/correlogram/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>计算部分自相关</td> 
      <td>
      选择是否使用偏自相关函数计算系数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>绘制95%分割线</td> 
      <td>
      是否绘制95%分割线
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>自相关属性</td> 
      <td>
      选择需要计算自相关系数的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“相关图（Correlogram）”**控件绘制自相关系数。  
![workflow](/img/aistudio/visualize/correlogram/workflow.png)

案例中加载“airpassenger”数据集，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/visualize/correlogram/workflow-result.png)